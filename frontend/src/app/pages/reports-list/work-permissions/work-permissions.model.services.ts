import { Injectable } from '@angular/core'
import { TableBase } from 'src/app/common/Table-base';
import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable()
export class WorkPermissionsModelService extends TableBase {
  constructor() {
    super();
  }

  /** Searches for EN_NAME, ID, EN_DESC in the data and resets data into displayData */
  public searchItems(searchText: string): void {

    if (searchText) {
      let isTextInWORK_DESCRIPTION = (item: any) =>
        item.WORK_DESCRIPTION ? item.WORK_DESCRIPTION.toString()
          .toLowerCase()
          .indexOf(searchText.toString().toLowerCase()) !== -1 : false;

      let isTextInPERMISSION_DETAIL_TYPE_EN = (item: any) =>
        item.PERMISSION_DETAIL_TYPE_EN ? item.PERMISSION_DETAIL_TYPE_EN.toString()
          .toLowerCase()
          .indexOf(searchText.toString().toLowerCase()) !== -1 : false;

      let isTextInEQUIBMENT_NAME = (item: any) =>
        item.EQUIBMENT_NAME ? item.EQUIBMENT_NAME.toString()
          .toLowerCase()
          .indexOf(searchText.toString().toLowerCase()) !== -1 : false;

      let isTextInSTATUS_EN = (item: any) =>
        item.STATUS_EN ? item.STATUS_EN.toString()
          .toLowerCase()
          .indexOf(searchText.toString().toLowerCase()) !== -1 : false;

      let isTextInDESCRIPTION = (item: any) =>
        item.DESCRIPTION ? item.DESCRIPTION.toString()
          .toLowerCase()
          .indexOf(searchText.toString().toLowerCase()) !== -1 : false;

      this.displayData = this.savedData.filter(
        item => isTextInWORK_DESCRIPTION(item) ||
          isTextInPERMISSION_DETAIL_TYPE_EN(item) ||
          isTextInEQUIBMENT_NAME(item) ||
          isTextInSTATUS_EN(item) ||
          isTextInDESCRIPTION(item),
      );
    } else {
      this.displayData = this.savedData
    }
    this.displayData = [...this.displayData] // refresh
  }

  //EXPORT TO EXCEL FUNCTION
  generateExcel(mainData, mainHead, parameters, dateValue, titleAr, date) {

    //Excel Title, Header, Data
    const title = titleAr + '                                                                      ' + date + dateValue;
    let params = parameters;
    const header = mainHead;
    // data = [[],[],[]];
    const data = mainData;

    //Create workbook and worksheet
    let workbook = new Workbook();
    let worksheet = workbook.addWorksheet('Report Data');
    //Add Row and formatting
    let titleRow = worksheet.addRow([title]);
    titleRow.font = { name: 'Verdana Sans Serif', family: 4, size: 16, underline: 'single', bold: true, }
    // let subTitleRow = worksheet.addRow(['Date : ' + new Date()])
    worksheet.addRow([]);
    // Add Image
    // let logo = workbook.addImage({
    //   base64: logoFile.logoBase64,
    //   extension: 'png',
    // });
    // worksheet.addImage(logo, 'E1:F3');
    worksheet.mergeCells('A1:G2');

    let paramRow = worksheet.addRow([params])
    paramRow.font = { name: 'Verdana Sans Serif', family: 4, size: 14, bold: true }
    worksheet.addRow([]);

    worksheet.mergeCells('A3:G4');

    paramRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })

    //Blank Row 
    worksheet.addRow([]);
    //Add Header Row
    let headerRow = worksheet.addRow(header);

    // Cell Style : Fill and Border
    headerRow.eachCell((cell, number) => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFFFFF00' },
        bgColor: { argb: 'FF0000FF' }
      }
      cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    })
    // worksheet.addRows(data);
    // Add Data and Conditional Formatting
    data.forEach(d => {
      let row = worksheet.addRow(d);
      // let qty = row.getCell(5);
      // let color = 'FF99FF99';
      // if (+qty.value < 500) {
      //   color = 'FF9999'
      // }
      // qty.fill = {
      //   type: 'pattern',
      //   pattern: 'solid',
      //   fgColor: { argb: color }
      // }
    }
    );
    worksheet.getColumn(1).width = 20;
    worksheet.getColumn(2).width = 20;
    worksheet.getColumn(3).width = 20;
    worksheet.getColumn(4).width = 30;
    worksheet.getColumn(5).width = 30;
    worksheet.getColumn(6).width = 20;
    worksheet.getColumn(7).width = 20;

    worksheet.addRow([]);
    //Footer Row
    let footerRow = worksheet.addRow(['This is system generated excel sheet.']);
    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFCCFFE5' }
    };
    footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } }
    //Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:G${footerRow.number}`);
    //Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data) => {
      let blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Work-PermissionsReport.xlsx');
    })
  }

}
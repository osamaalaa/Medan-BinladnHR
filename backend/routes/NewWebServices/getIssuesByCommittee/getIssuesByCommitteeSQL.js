
let statements = {
    getIssuesByCommittee: {
        statement: `
        SELECT
ISSUE_ID ,
REQUEST_ID ,
ISSUE_TITLE ,
ISSUE_SUMMARY ,
ISSUE_PRIORITY ,
ASSIGN_TO R,
TARGET_RESOLUTION_DATE ,
ACTUAL_RESOLUTION_DATE ,
READ_STATUS ,
REFERENCE_ID ,
REFERENCE_TYPE ,
ISSUE_TRACK_ID ,
ISSUE_TYPE ,
FINAL_RESOLUTION ,
PROJECT_ID ,
DELETED ,
DELETED_BY ,
DELETED_DATE ,
CREATED_WO ,
SUBSIDIARY_ID ,
CLASSIFICATION ,
CREATION_DATE ,
TYPE_ID ,
ISSUE_SUB_CLASS ,
ISSUE_LOCATION ,
SHIFT ,
TOOL ,
REQUIRE_REPORT ,
ISSUE_STATE ,
ISSUE_NOTE ,
CUSTOM_FIELD_CHAR1 ,
CUSTOM_FIELD_CHAR2 ,
CUSTOM_FIELD_CHAR3 ,
CUSTOM_FIELD_CHAR4 ,
CUSTOM_FIELD_CHAR5 ,
CUSTOM_FIELD_NUMBER1 ,
CUSTOM_FIELD_NUMBER2 ,
CUSTOM_FIELD_NUMBER3 ,
CUSTOM_FIELD_NUMBER4 ,
CUSTOM_FIELD_NUMBER5 ,
CUSTOM_FIELD_DATE1 ,
CUSTOM_FIELD_DATE2 ,
CUSTOM_FIELD_DATE3 ,
CUSTOM_FIELD_DATE4 ,
CUSTOM_FIELD_DATE5 ,
CUSTOM_FIELD_LIST1 ,
CUSTOM_FIELD_CHAR6 ,
CUSTOM_FIELD_CHAR7 ,
CUSTOM_FIELD_CHAR8 ,
CUSTOM_FIELD_CHAR9 ,
CUSTOM_FIELD_CHAR10 ,
CUSTOM_FIELD_CHAR11 ,
CUSTOM_FIELD_CHAR16 ,
CUSTOM_FIELD_CHAR17 ,
CUSTOM_FIELD_CHAR12 ,
ASSEET_ID ,
CUSTOM_FIELD_CHAR13 ,
CUSTOM_FIELD_CHAR14 ,
CUSTOM_FIELD_CHAR15 ,
CUSTOM_FIELD_CHAR18 ,
CUSTOM_FIELD_CHAR19 ,
EMPLOYEE_ID ,
CUSTOM_FIELD_CHAR20 ,
CUSTOM_FIELD_DATE9 ,
CUSTOM_FIELD_DATE11 ,
CUSTOM_FIELD_DATE12 ,
CUSTOM_FIELD_DATE13 ,
CUSTOM_FIELD_DATE14 ,
CUSTOM_FIELD_DATE15 ,
CUSTOM_FIELD_DATE16  ,
CUSTOM_FIELD_DATE17 ,
CUSTOM_FIELD_DATE18 ,
CUSTOM_FIELD_DATE19 ,
CUSTOM_FIELD_DATE20 ,
CUSTOM_FIELD_DATE10 ,
CUSTOM_FIELD_DATE6 ,
CUSTOM_FIELD_DATE7 ,
CUSTOM_FIELD_DATE8 ,
CUSTOM_FIELD_NUMBER6 ,
CUSTOM_FIELD_NUMBER7 ,
CUSTOM_FIELD_NUMBER8 ,
CUSTOM_FIELD_NUMBER9 ,
CUSTOM_FIELD_NUMBER10 ,
CUSTOM_FIELD_NUMBER11 ,
CUSTOM_FIELD_NUMBER12 ,
CUSTOM_FIELD_NUMBER13 ,
CUSTOM_FIELD_NUMBER14 ,
CUSTOM_FIELD_NUMBER15 ,
CUSTOM_FIELD_NUMBER16 ,
CUSTOM_FIELD_NUMBER17 ,
CUSTOM_FIELD_NUMBER18 ,
CUSTOM_FIELD_NUMBER19 ,
CUSTOM_FIELD_NUMBER20 ,
SUB_LOCATION ,
FINISH_DATE ,
START_DATE ,
EXPECT_END_DATE ,
PERIOD ,
DEPARTMENT_ID ,
VIOLATION_ID ,
VIOLATION_GROUP_ID ,
VIOLATION_VALUE ,
ASSET_GROUP_ID ,
PARENT_ISSUE_ID ,
CREATED_BY
FROM ISSUES
where REFERENCE_TYPE = 2 
and REFERENCE_ID = :commitee_id
        `,
        returns: [],
        bindings: [],
        qstring: "",
        requireCommit: true
    }   
}
  module.exports = statements ;
  
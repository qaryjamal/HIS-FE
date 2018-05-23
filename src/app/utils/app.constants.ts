/**
 * @Author Irfan Nasim
 * @since 07-Sep-17
 * @Description Application Constants
 */
export class AppConstants {

    public static ACCESS_TOKEN = 'access_token';
    public static EXPIRE_PASSWORD_TOKEN = 'expire_password_token';
    public static FETCH_ALL_CLINICAL_DEPARTMENTS_URI = '/setting/department/';
    public static DELETE_CLINICAL_DEPARTMENTS_URI = '/setting/department/delete/';
    public static SEARCH_CLINICAL_DEPARTMENT_URL = '/setting/department/search/';
    public static SAVE_CLINICAL_DEPARTMENT_URL = '/setting/department/save';
    public static UPDATE_CLINICAL_DEPARTMENT_URL = '/setting/department/update';
    public static FETCH_ALL_BRANCHES_URL = '/setting/branch/';
    public static CREATE_USER_ENDPOINT = '/user/add';
    public static USER__SEARCH = '/user/search/';

    ////////////////////// ICD URLs ///////////////////////////////
    public static ICD_CODE = '/setting/icd/code';
    public static ICD_CODE_SAVE_URL = '/setting/icd/code/save';
    public static ICD_CODE_UPDATE_URL = '/setting/icd/code/update';
    public static ICD_CODES = '/setting/icd/codes/';
    public static ICD_CODE_DELETE_URL = '/setting/icd/code/delete?codeId=';
    public static ICD_CODE_SEARCH = '/setting/icd/code/search/';
    public static ICD_VERSION_SAVE_URL = '/setting/icd/version/save';
    public static ICD_VERSION_UPDATE_URL = '/setting/icd/version/update';
    public static ICD_VERSIONS = '/setting/icd/versions/';
    public static ICD_VERSION_DELETE_URL = '/setting/icd/version/delete?iCDVersionId=';
    public static ICD_VERSION_SEARCH = '/setting/icd/version/search/';
    public static ICD_CODE_VERSION_SAVE_URL = '/setting/icd/codeVersion/save';
    public static ICD_CODE_VERSIONS = '/setting/icd/codeVersions/';
    public static ICD_CODE_VERSION_DELETE_URL = '/setting/icd/codeVersion/delete?associateICDCVId=';
    public static ICD_CODE_VERSION_SEARCH = '/setting/icd/codeVersion/search/';
    public static ICD_VERSION_CODES_VERSION = '/setting/icd/version/codes/?versionId=';

    public static ROLE_ENDPOINT = '/setting/rolePermission/add';
    public static PERMISSION_ENDPOINT = '/user/auth/authorities';
    public static PERMISSION_BY_ROLE = '/setting/rolePermission/role';
    public static ASSIGN_PERMISSIONS_TO_ROLES = '/setting/rolePermission/assignAuthorities';

    ////////////////////// Service Tax URLs ///////////////////////////////
    public static FETCH_ALL_TAX_URL = '/setting/tax/';
    public static SERVICE_TAX_SAVE_URL = '/setting/tax/save';
    public static SERVICE_TAX_DELETE_URL = '/setting/tax/delete?taxId=';
    public static SERVICE_TAX_UPDATE_URL = '/setting/tax/update';
    public static SERVICE_TAX_SEARCH_URL = '/setting/tax/search/';

    public static FETCH_ALL_TAX_URL = '/setting/tax/';

    ////////////////////// Service Tax URLs ///////////////////////////////
    public static FETCH_ALL_MEDICAL_SERVICES_URL = '/setting/medicalService/';
    public static SAVE_MEDICAL_SERVICES_URL = '/setting/medicalService/save';
    public static UPDATE_MEDICAL_SERVICES_URL = '/setting/medicalService/update';
    public static DELETE_MEDICAL_SERVICES_URL = '/setting/medicalService/delete?';
    public static FETCH_MEDICAL_SERVICES_BY_ID_URL = '/setting/medicalService/id/';
    public static MEDICAL_SERVICE_SEARCH = '/setting/medicalService/search/';
}
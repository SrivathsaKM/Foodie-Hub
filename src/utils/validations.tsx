export const imageBasePath = '';

export const regExpression = {
  email: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  url: /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+([-]*)+[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
  password: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
};

export const errorCodes = {
  password: {
    0: '',
    1: 'Please enter password',
  },
  passwordObj: {
    requiredFlag: true,
  },

  newPassword: {
    0: '',
    1: 'Please enter password',
    4: 'Please enter valid password format',
  },
  newPasswordObj: {
    requiredFlag: true,
    regexPattern: regExpression.password,
  },

  email: {
    0: '',
    1: 'Please enter email address',
    4: 'Please enter valid email address',
  },
  emailObj: {
    requiredFlag: true,
    regexPattern: regExpression.email,
  },
  name: {
    0: '',
    1: 'Please enter client name',
  },
  nameObj: {
    requiredFlag: true,
  },
  users: {
    0: '',
    1: 'Please enter user email address',
    4: 'Please enter valid email address',
  },
  usersObj: {
    requiredFlag: true,
    regexPattern: regExpression.email,
  },
  _users: {
    0: '',
    1: 'Please enter user email address',
  },
  _usersObj: {
    requiredFlag: true,
  },
  first_name: {
    0: '',
    1: 'Please enter first name',
  },
  first_name_Obj: {
    requiredFlag: true,
  },
  last_name: {
    0: '',
    1: 'Please enter last name',
  },
  last_name_Obj: {
    requiredFlag: true,
  },
  designation: {
    0: '',
    1: 'Please enter designation',
  },
  designationObj: {
    requiredFlag: true,
  },
  projectName: {
    0: '',
    1: 'please enter project name',
  },
  projectNameObj: {
    requiredFlag: true,
  },
  url: {
    0: '',
    1: 'Please enter url',
    4: 'Please enter valid url',
  },
  urlObj: {
    requiredFlag: true,
    regexPattern: regExpression.url,
  },
  researcher: {
    0: '',
    1: 'Please select researcher',
  },
  researcherObj: {
    requiredFlag: true,
  },
  scan_type: {
    0: '',
    1: 'Please select scan type',
  },
  scan_type_Obj: {
    requiredFlag: true,
  },
  description: {
    0: '',
    1: 'Please enter description',
  },
  descriptionObj: {
    requiredFlag: true,
  },
  user_name: {
    0: '',
    1: 'Please enter username',
  },
  user_name_Obj: {
    requiredFlag: true,
  },
  role: {
    0: '',
    1: 'Please select role',
  },
  roleObj: {
    requiredFlag: true,
  },
  engagement_type: {
    0: '',
    1: 'Please enter type of engagement',
  },
  engagement_type_Obj: {
    requiredFlag: true,
  },
  methodology: {
    0: '',
    1: 'Please select methodology type',
  },
  methodologyObj: {
    requiredFlag: true,
  },
  due_date: {
    0: '',
    1: 'Please select due date',
  },
  due_date_Obj: {
    requiredFlag: true,
  },
  requested_date: {
    0: '',
    1: 'Please select request date',
  },
  requested_date_Obj: {
    requiredFlag: true,
  },
  category_name: {
    0: '',
    1: 'Please enter category name',
  },
  category_name_Obj: {
    requiredFlag: true,
  },
  title: {
    0: '',
    1: 'Please enter title',
  },
  title_Obj: {
    requiredFlag: true,
  },
  cwe: {
    0: '',
    1: 'Please select cwe',
  },
  cwe_Obj: {
    requiredFlag: true,
  },
  gdpr: {
    0: '',
    1: 'Please select gdpr',
  },
  gdpr_Obj: {
    requiredFlag: true,
  },
  vulnerability: {
    0: '',
    1: 'Please select vulnerability',
  },
  vulnerability_Obj: {
    requiredFlag: true,
  },
  owasp: {
    0: '',
    1: 'Please select owasp',
  },
  owasp_Obj: {
    requiredFlag: true,
  },
  risk_status: {
    0: '',
    1: 'Please select risk status',
  },
  risk_status_Obj: {
    requiredFlag: true,
  },
};

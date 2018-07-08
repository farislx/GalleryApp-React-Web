export default class Auth {
  /**
   * Authenticate a user. Save a token string in Local Storage
   *
   * @param {string} token
   */
  static authenticateUser(token) {
    localStorage.setItem('standard_token', token);
  }

  /**
   * Check if a user is authenticated - check if a token is saved in Local Storage
   *
   * @returns {boolean}
   */
  static isUserAuthenticated() {
    return localStorage.getItem('standard_token') !== null;
  }

  /**
   * Deauthenticate a user. Remove a token from Local Storage. 
   *
   */
  static deauthenticateUser() {
    localStorage.removeItem('standard_token');
    localStorage.removeItem('authorization');
    localStorage.removeItem('loginedUser');
  }

  /**
   * Get a token value.
   *
   * @returns {string}
   */

  static getToken() {
    return localStorage.getItem('standard_token');
  }

  /***
   * set user authentication details.
   *
   */
  static setAuthorization(data) {
    localStorage.setItem('authorization', JSON.stringify(data));
  }

  /***
   * Get authorization user details
   * 
   * @returns {json}
   * 
   */
  static getAuthorization() {
    return JSON.parse(localStorage.getItem('authorization'));
  }

  static isAuthorized(value) {

    let authorization = this.getAuthorization();

    if (Array.isArray(value)) {

      for (var i in value) {

        if (authorization.indexOf(value[i]) >= 0) {

          return true;
        }
      }

      return false;
    }

    return authorization.indexOf(value) >= 0 ? true : false;
  }


  static setToken(token) {

    localStorage.setItem('standard_token', "Bearer " + token);
  }

  static setUserInfo(userInfo) {

    localStorage.setItem('currentUser', JSON.stringify(userInfo));
  }

  /*** 
   * setting logined user info
   */
  static setLoginUserInfo(data) {

    localStorage.setItem('loginedUser', JSON.stringify(data));
  }


  static getUserInfo() {
    return JSON.parse(localStorage.getItem('loginedUser'));
  }

  static getUserId() {
    return this.getUserInfo().Id;
  }

  static getUserName() {

    let userInfo = this.getUserInfo();
    return userInfo ? userInfo.Username : "";
  }

  static getSchoolInfo() {

    let userInfo = this.getUserInfo();
    if (userInfo)
      return { schoolId: userInfo.SchoolId, schoolCode: userInfo.SchoolCode, schoolName: userInfo.SchoolName };

    return null;
  }

  static setSchoolList(schoolList) {

    localStorage.setItem('userSchoolList', JSON.stringify(schoolList));
  }

  static getSchoolList() {

    return JSON.parse(localStorage.getItem('userSchoolList'));
  }


  static checkUserAuthorized(pageName, callback, component) {

    let pageAllowedRoles = _.find(this.getAcl(), (i) => { return i.pageName == pageName });

    let userInfo = this.getUserInfo();

    if(!userInfo) {
      
      window.location.replace("/#/");
      return;
    }

    let userRoles = userInfo.UserRoles;

    if (!pageAllowedRoles) {

      callback(null, component);

    } else {

      let autorizePage = false;

      for (let i = 0; i < pageAllowedRoles.Roles.length; i++) {

        let roleName = pageAllowedRoles.Roles[i];
        let roleAllowed = _.find(userRoles, (i) => { return i.RoleName == roleName });

        if (roleAllowed) {

          autorizePage = true;
          break;
        }
      }

      if (true) {//autorizePage

        callback(null, component);
      } else {

        window.location.replace("/#/notauthorized")
      }

    }
  }

  static checkAuthorized(pageName) {

    return true;
    let pageAllowedRoles = _.find(this.getAcl(), (i) => { return i.pageName == pageName });
    let userRoles = this.getUserInfo().UserRoles;

    let autorizePage = false;

    for (let i = 0; i < pageAllowedRoles.Roles.length; i++) {

      let roleName = pageAllowedRoles.Roles[i];
      let roleAllowed = _.find(userRoles, (i) => { return i.RoleName == roleName });

      if (roleAllowed) {

        autorizePage = true;
        break;
      }
    }

    return autorizePage;

  }

  static getAcl() {
    return [{
      'pageName': "studentUpload", "Roles": ["Administrator"]
    }, {
      'pageName': "message", "Roles": ["Administrator", "Office"]
    }, {
      'pageName': "messageSearch", "Roles": ["Administrator", "Office", "Teacher"]
    }, {
      'pageName': "studentSearch", "Roles": ["Administrator", "Office", "Teacher"]
    }, {
      'pageName': "attendenance", "Roles": ["Administrator", "Office", "Teacher"]
    }, {
      'pageName': "staffUpload", "Roles": ["Administrator", "Office"]
    }, {
      'pageName': "userManagement", "Roles": ["Administrator"]
    }, {
      'pageName': "changePassword", "Roles": ["Administrator", "Office", "Teacher"]
    }, {
      'pageName': "settings", "Roles": ["Administrator", "Office", "Teacher"]
    }, {
      'pageName': "StudentEdit", "Roles": ["Administrator"]
    }, {
      'pageName': "StudentDelete", "Roles": ["Administrator"]
    }, {
      'pageName': "resetPassword", "Roles": ["Administrator"]
    }]
  }

}
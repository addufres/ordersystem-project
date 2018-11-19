//We don't need or use this authentication service,
//it's just here to illustrate shared services.

class AuthenticationService {
    constructor () {

    }
    authenticate() {
        return true;
    }
};

export default AuthenticationService;
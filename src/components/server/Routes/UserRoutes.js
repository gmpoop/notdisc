
//GetUsers 


class UserRoutes {

    _get = "api/Users/get?email=@email&id=@id";
    _post = "api/Users/create";
    _put = "/api/Users/update/";
    _delete = "/api/Users/delete/";


    Get() {
        return this._get;
    }
    Post() {
        return this._post;
    }
    Put() {
        return this._put;
    }
    Delete() {
        return this._delete;
    }

    Replace(route, valuesToReplace, values) {

        if (!valuesToReplace && !values) {
            console.log("One of the arrays is null or undefined");
            return route;
        }

            if(valuesToReplace.length !== values.length) {
                console.log("The arrays are not of the same length");
                return route;
            }

            for(let i = 0; i < valuesToReplace.length; i++) {
                route = route.replace(valuesToReplace[i], values[i]);
            }

            return route;
        
    }
    

}   export default UserRoutes;

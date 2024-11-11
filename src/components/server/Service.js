import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

class Service {

    PORT = process.env.REACT_APP_LOCALPORT;

    constructor(req, res, method, body) {
        this.req = req;
        this.res = res;
        this.method = method;
        this.body = body;
    }

    async request() {
        const url = new URL(this.req, this.PORT);

        console.log(url.href);
        
        const options = {
            method: this.method,
            headers: {
                "Content-Type": this.res
            }
        };
        
        if (this.method !== "GET") {
            options.body = JSON.stringify(this.body);
        }
        
        console.log(options);
        
        try {
            const response = await fetch(url.href, options);
            return response;
        } catch (error) {
            throw new Error("Network error");
        }
    }
    
    async response() {
        try {
            const response = await this.request();
            
            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                } catch {
                    errorData = {};
                }
                throw new Error(errorData.message || "Algo salió mal!");
            }
    
            const data = await response.json();
            return data;
    
        } catch (error) {
            MySwal.fire({
                title: 'Error!',
                text: error.message,
                icon: 'error',
            });
            return { success: false, message: error.message };
        }
    }
}    

export default Service;

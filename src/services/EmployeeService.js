import axios from "axios";

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/employees";

class EmployeeService {
   
    saveEmployee(employee) {
        // return axios.post(EMPLOYEE_API_BASE_URL, employee);
        const request = axios.post(EMPLOYEE_API_BASE_URL, employee)
        return request.then(response => response.data)
    }

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    deleteEmplooye(id){
        return axios.delete(EMPLOYEE_API_BASE_URL + "/" +id);
    }

    getElementById(id){
        return axios.get(EMPLOYEE_API_BASE_URL + "/" + id);
    }

    updateEmplooye(employee, id){
        const request = axios.put(EMPLOYEE_API_BASE_URL + "/" + id, employee);
        return request.then(response => response.data)
    }
}

export default new EmployeeService();
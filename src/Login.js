import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const [mem, setMem] = useState({ id: "", password: "" })
    const changeValue = (e) => {
        setMem({ ...mem, [e.target.name]: e.target.value });
    }
    const submit = (e) => {
        e.preventDefault();
        axios.get(`http://localhost:8090/login`, mem)
            .then(res => {
                navigate("/makeAccount");
                // setAcc({ ...racc });
                // setAcc({...res.data})
            })
            .catch(err => {
                alert(err.response.data);
            })
    };
    return (
        <div className="route">
            <h3>로그인</h3>
            <Form>
                <FormGroup row>
                    <tr>
                        <th>아이디</th>
                        <td><input type="text" name="id" onChange={changeValue} /></td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td><input type="password" name="password" onChange={changeValue} /></td>
                    </tr>
                    <tr>
                        <th></th>
                        <td><input type="submit" value="로그인" onClick={submit} /></td>
                    </tr>
                </FormGroup>
            </Form>
        </div>
    )
}
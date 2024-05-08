import { useState } from "react";
import "./App.css";
import axios from 'axios';

export default function AccountInfo() {
  const [accId, setAccId] = useState("");
  const [acc, setAcc] = useState({
    id: "",
    name: "",
    money: "",
    type: "",
    grade: "",
  });

  const submit = (e) => {
    e.preventDefault();
    //서버로부터 accId로 조회해온 결과를 화면에 출력한다.
    // let racc = {
    //   id: accId,
    //   name: "홍길동",
    //   money: 100000,
    //   type: "special",
    //   grade: "VIP",
    // };
    axios.get(`http://localhost:8090/accountInfo?id=${accId}`)
        .then(res=> {
          console.log(res)
              // setAcc({ ...racc });
          setAcc({...res.data})
        })
  };
  return (
    <div>
      <h3>계좌조회</h3>
      <table border="1">
        <tbody>
          <tr>
            <th>계좌번호</th>
            <td className="accValue">
              <input
                type="text"
                name="id"
                onChange={(e) => setAccId(e.target.value)}
              />
              &nbsp;
              <input type="submit" value="조회" onClick={submit} />
            </td>
          </tr>
        </tbody>
      </table>
      <table border="1">
        <tbody>
          <tr>
            <th>계좌번호</th>
            <td className="accValue">
              <label>{acc.id}</label>
            </td>
          </tr>
          <tr>
            <th>이름</th>
            <td className="accValue">
              <label>{acc.name}</label>
            </td>
          </tr>
          <tr>
            <th>잔액</th>
            <td className="accValue">
              <label>{acc.balance}</label>
            </td>
          </tr>
          <tr>
            <th>종류</th>
            <td className="accValue">
              <label>{acc.type}</label>
            </td>
          </tr>
          <tr>
            <th>등급</th>
            <td className="accValue">
              <label>{acc.grade}</label>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

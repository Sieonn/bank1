import { useState } from "react";
import axios from "axios";

export default function Deposit() {
  const [acc, setAcc] = useState({
    id: "",
    money: "",
  });
  const [message, setMessage] = useState("");

  const submit = (e) => {
    e.preventDefault();
    //backend에서 acc를 전송한 후 잔액을 받는다.
    axios.post(`http://localhost:8090/deposit`,acc)
    .then(res => {
      console.log(res);
      // setAcc({ ...racc });
      setMessage(`${acc.id}님 입금이 완료되었습니다. (잔액:${res.data})`);
    })
    .catch(err=> {
      setMessage(`${acc.id}님 입금이 실패했습니다. (${err.response.data})`);
    })
     //+기호를 붙여주기만해도 string이  숫자로 변한다.
  };

  return (
    <div className="route">
      <h3>입금</h3>
      <table border="1">
        <tbody>
          <tr>
            <th>계좌번호</th>
            <td>
              <input
                type="text"
                name="id"
                onChange={(e) => setAcc({ ...acc, id: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <th>입금액</th>
            <td>
              <input
                type="text"
                name="money"
                onChange={(e) => setAcc({ ...acc, money: e.target.value })}
              />
            </td>
          </tr>
          <tr>
            <th></th>
            <td>
              <input type="submit" value="입금" onClick={submit} />
            </td>
          </tr>
        </tbody>
      </table>
      <div>{message}</div>
    </div>
  );
}

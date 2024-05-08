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
    axios.get(`http://localhost:8090/deposit`).then((res) => {
      console.log(res);
      // setAcc({ ...racc });
      setAcc({ ...res.data });
    });
    setMessage(
      `${acc.id}님 입금이 완료되었습니다. (잔액:${100000 + +acc.money})`
    ); //+기호를 붙여주기만해도 string이  숫자로 변한다.
  };

  return (
    <>
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
    </>
  );
}

import {useState, useEffect} from "react";
import axios from "axios";
export default function AllAccountInfo() {
    const [accs, setAccs] = useState([])
    const [account, setAccount] = useState({id:'', name:'', balance:'',type:'', grade:''})

    useEffect(() => {
        axios.get('http://localhost:8090/allAccountInfo')
        .then(res=> {
            console.log(res.data)
            setAccs([...res.data])
        })
        // let raccs = [
        //     {id:'1001', name:'홍길동', balance:100000, type:'normal', grade:''},
        //     {id:'1002', name:'김길동', balance:200000, type:'special', grade:'VIP'},
        //     {id:'1003', name:'고길동', balance:300000, type:'special', grade:'Gold'},
        //     {id:'1004', name:'하길동', balance:400000, type:'normal', grade:''},
        //     {id:'1005', name:'장길동', balance:500000, type:'special', grade:'Silver'}
        // ];
       // Set the state with account information
    },[]) //[]를 같이써주면 한번만 실행하라는것, 안써주면 계속 업데이트 한다고 돌아감.

    return (
        <>
            <h3>전체계좌 조회</h3>
            <table border="1">
                <tbody>
                    <tr>
                        <th>계좌번호</th>
                        <th>이름</th>
                        <th>잔액</th>
                        <th>종류</th>
                        <th>등급</th>
                    </tr>
                    {/* Map through the accs array and render table rows */}
                    {accs.map(account => (
                        <tr key={account.id}>
                            <td>{account.id}</td>
                            <td>{account.name}</td>
                            <td>{account.balance}</td>
                            <td>{account.type}</td>
                            <td>{account.grade}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

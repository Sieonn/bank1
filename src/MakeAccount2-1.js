import { useState } from "react";
import axios from "axios";
import { Form,Col,InputGroup, InputGroupAddon, InputGroupText, Input } from 'reactstrap';
export const MakeAccount2 = () => {
  const [acc, setAcc] = useState({
    id: "",
    name: "",
    balance: "",
    type: "nomal",
    grade: "",
  });
  const changeValue = (e) => {
    setAcc({ ...acc, [e.target.name]: e.target.value });
  };
  const submit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8090/makeAccount',acc)
    .then(res=>{
      alert(res.data)
    })
  }
  return (
    <div className="route">
      <h3>계좌개설</h3>
      <Form>
      <InputGroup>
        <InputGroupAddon addonType="prepend"><InputGroupText className="label-text">계좌번호</InputGroupText></InputGroupAddon>
        <Input name="id"  onChange={changeValue}/>
      </InputGroup>
      <br/>
      <InputGroup>
        <InputGroupAddon addonType="prepend"><InputGroupText className="label-text">이름</InputGroupText></InputGroupAddon>
        <Input name="name"  onChange={changeValue}/>
      </InputGroup>
      <br/>
      <InputGroup>
        <InputGroupAddon addonType="prepend"><InputGroupText className="label-text">입금액</InputGroupText></InputGroupAddon>
        <Input name="balance"  onChange={changeValue}/>
      </InputGroup>
      <br/>
      <InputGroup>
        <InputGroupAddon addonType="prepend"><InputGroupText className="label-text ">종류</InputGroupText></InputGroupAddon>
        <Input type="radio" name="type"  value="normal" onChange={changeValue} checked={acc.type==='nomal'}/>일반
        <Input type="radio" name="type"  value="special" onChange={changeValue}/>특수
      </InputGroup>
      <br/>
      <InputGroup>
        <InputGroupAddon addonType="prepend"><InputGroupText className="label-text">등급</InputGroupText></InputGroupAddon>
        <Input name="id"  onChange={changeValue}/>
      </InputGroup>
      <br/>
        {/* <FormGroup row>
          <Label check for="type" sm={3}>등급</Label>
          <Col sm={9}>
          <Input type="select" name="grade">
            <option value="">선택하세요</option>
            <option value="VIP">VIP</option>
            <option value="Gold">Gold</option>
            <option value="Silver">Silver</option>
            <option value="Nomal">Nomal</option>
        </Input>
        </Col>
        </FormGroup>
        <Button onClick={submit}>개설</Button> */}
      </Form>
    </div>
  );
};

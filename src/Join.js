import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function Join() {

    const navigate = useNavigate();
    const [mem, setMem] = useState({ id: '', name: '', password: '', email: '', address: '' })
    const [message, setMessage] = useState('');
    const [modal, setModal] = useState(false);


    const changeValue = (e) => {
        setMem({ ...mem, [e.target.name]: e.target.value })
    }

    const submit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/join", mem)
            .then(res => {
                navigate("/");
            })
            .catch(err => {
                alert(err.response.data);
            })
    }
    const checkMemId = (e) => {
        e.preventDefault();
        // setIsIdMemCheck(true);
        axios.get(`http://localhost:8090/checkMemId?id=${mem.id}`)
            .then(res => {
                alert(res.data)
                if (res.data === 'true') {
                    setMessage("중복된 아이디입니다.")
                } else {
                    setMessage("사용가능 한 아이디입니다.")
                }
                setModal(true);
            })
            .catch(err => {
                setMessage(err.response.data);
            })
    }



    return (
        <div className='route'>
            <h3>회원가입</h3>
            <Form>
                <FormGroup>
                    <Label for="id" sm={3}>아이디</Label>
                    <Col sm={6}>
                        <Input type='text' name='id' id='id' onChange={changeValue} />
                    </Col>
                    <Col sm={3}>
                        <Button color="success" onClick={checkMemId}>중복</Button>
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="name" sm={3}>이름</Label>
                    <Col sm={9}>
                        <Input type='text' name='name' id='name' onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="password" sm={3}>비밀번호</Label>
                    <Col sm={9}>
                        <Input type='password' name='password' id='password' onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="email" sm={3}>이메일</Label>
                    <Col sm={9}>
                        <Input type='text' name='email' id='email' onChange={changeValue} />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Label for="address" sm={3}>주소</Label>
                    <Col sm={9}>
                        <Input type='text' name='address' id='address' onChange={changeValue} />
                    </Col>
                </FormGroup>
                <Button onClick={submit} color='primary'>회원가입</Button>
            </Form>
            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalHeader toggle={() => setModal(!modal)}>회원가입</ModalHeader>
                <ModalBody>
                    {message}
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={() => setModal(!modal)}>확인</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
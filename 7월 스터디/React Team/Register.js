import React, { useState, useEffect } from 'react';
// import { useForm, ErrorMessage, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { requestRegister } from '../actions';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { ValidatorForm } from 'react-material-ui-form-validator';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '& > *': {
            margin: theme.spacing(1),
            width: '50ch',
        },
    },
    title: {
        textAlign: 'center',
        fontSize: '2rem',
        marginBottom: '1.5rem',
    },
    // textField: {
    //     marginBottom: '0.5rem',
    //     alignItems: 'center',
    //     // width: '30rem',
    // },
}));

const Register = () => {
    const classes = useStyles();
    // const { handleSubmit, register, errors, control } = useForm({ validateCriteriaMode: 'all' });
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const history = useHistory();

    useEffect(() => {
        if (auth !== null) {
            history.push('/');
        }
    }, [auth, history]);

    // const onSubmit = () => {
    //     if (email === '' && password === '') {
    //         alert('빈 칸을 입력해주세요');
    //     } else if (password !== passwordConfirm) {
    //         alert('비밀번호가 일치하지 않습니다.');
    //     }
    //     // console.log();
    //     dispatch(requestRegister({ email, password }));
    // };
    const onClick = () => {
        if (email === '' && password === '') {
            alert('빈 칸을 입력하세요.');
            return;
        } else if (password !== passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        dispatch(requestRegister({ email, password }));
    };
    const appKeyPress = (e) => {
        if (e.key === 'Enter') {
            onClick();
            // onSubmit();
        }
    };

    return (
        <form className={classes.root}>
            <div className={classes.title}> REGISTER</div>
            <TextField
                // as={TextField}
                // control={control}
                // inputRef={register({
                //     required: '이메일을 작성해주세요.',
                //     pattern: /^\S+@\S+$/i,
                //     message: '이메일 형식에 맞게 작성해주세요',
                // })}
                autoFocus
                autoComplete="email"
                className={classes.textField}
                name="email"
                // id="outlined-basic"
                label="이메일"
                variant="outlined"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={email === ''}
                helperText={email === '' ? '이메일을 입력해주세요.' : ''}
            />
            <TextField
                className={classes.input}
                name="password"
                label="비밀번호"
                variant="outlined"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={password === ''}
                helperText={password === '' ? '비밀번호를 입력해주세요.' : ''}
            />

            <TextField
                className={classes.input}
                name="passwordConfirm"
                // id="outlined-basic"
                label="비밀번호 확인"
                variant="outlined"
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                // error={password === password ? true : false}
                // helperText="비밀번호가 일치하지 않습니다."
                onKeyPress={appKeyPress}
            />
            <Button variant="contained" color="primary" disableElevation type="submit">
                {/* <Button variant="contained" color="primary" disableElevation> */}
                회원가입
            </Button>
        </form>
    );
};

export default Register;

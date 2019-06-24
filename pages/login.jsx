import React,{ useState} from 'react'
import { Form, Icon, Input, Button,   } from 'antd';
import axios from 'axios'
import { LoginWrapper } from './_style/_login.js';
function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class HorizontalLoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          winWidth: '100%',
          winHeight: '100%'
        };
        console.log(this.props.stars);
      }

    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
        //axios.get('https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1')
        //      .then(function (response) {
        //        console.log(response);
        //        alert(1);
        //      })
        this.setWidthHeight();

    }
    setWidthHeight(){
        let width = document.documentElement.clientWidth || document.body.clientWidth;;
        let height = document.documentElement.clientHeight || document.body.clientHeight;
        //setCount(width)
        this.setState({
            winWidth: width,
            winHeight: height
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (
                <LoginWrapper style={{width: this.state.winWidth + 'px',height: this.state.winHeight + 'px'}} >
                    <Form  onSubmit={this.handleSubmit}>
                        <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                            {getFieldDecorator('username', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="Password"
                                />,
                            )}
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" disabled={hasErrors(getFieldsError())}>
                                Log in
                  </Button>
                        </Form.Item>
                    </Form>
                </LoginWrapper>
        );
    }
}

const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(HorizontalLoginForm);

HorizontalLoginForm.getInitialProps = async () => {
  axios
    .get("https://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1")
    .then(function(response) {
      console.log(response);
      return {
        stars: response
      };
    });
};


export default WrappedHorizontalLoginForm;

import React from 'react';
import Text from './Text';
import { Formik } from 'formik';
import { Pressable, View, StyleSheet } from 'react-native';
import FormikTextInput from './FormikTextInput';
import useSignIn from '../hooks/useSignIn';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: ''
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name='username' placeholder='username' style={styles.inputText}/>
      <FormikTextInput name='password' placeholder='password' secureTextEntry={true} style={styles.inputText}/>
      <Pressable onPress={onSubmit} style={styles.button}>
        <Text style={styles.text}>Login</Text>
      </Pressable>
    </View>
  )
};

const validationSchema = yup.object().shape({
  username: yup.string().required('Username is required'),
  password: yup.string().required('Password is required')
});

const SignIn = () => {
  const [signIn] = useSignIn();

  const onSubmit = async ({username, password}) => {
    try {
      await signIn({username, password});
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({handleSubmit}) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  )
}

/// 

export default SignIn;
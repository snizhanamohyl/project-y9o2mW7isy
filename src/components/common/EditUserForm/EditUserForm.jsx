import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from 'redux/auth/selectors';
import { Formik } from 'formik';
import sprite from 'assets/sprite.svg';
import { updateUser } from 'redux/auth/auth-operations';
import {updateUserValidationSchema, SUPPORTED_FORMATS} from 'schemas/userUpdateSchema';
import { ModalContent } from './ModalContent.styled';
import {CloseIcon, CloseButton} from './EditUserForm.styled.js'
import {
  FormStyled, UserAvatarWrapper, AvatarLabel, PlusIcon, UserImgWrapper,
  InputButtonWrapper, NameLabel, NameInput, UserIconStyled,
  EditIcon, SubmitBtn, ErrorMessage, UserIcon, Avatar} from './EditUserForm.styled.js';

export default function EditUserForm({ handleCloseModal }) {
  const dispatch = useDispatch();
  const user = useSelector(getUser);

  const [pathToUserAvatar, setPathToUserAvatar] = useState(user.avatarURL);

  const handleSubmit = values => {
    dispatch(updateUser(values))
    handleCloseModal();
    };

    return (
      <ModalContent>
        <CloseButton type="button" onClick={handleCloseModal}>
          <CloseIcon width="24px" height="24px">
            <use href={`${sprite}#icon-X`}></use>
          </CloseIcon>
        </CloseButton>

        <Formik
          initialValues={{
            avatarURL: '',
            name: user.name,
          }}
          validationSchema={updateUserValidationSchema}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.setSubmitting(false);
            actions.resetForm();
          }}
        >
          {props => (
            <FormStyled onSubmit={props.handleSubmit}>
              <UserAvatarWrapper>
                <AvatarLabel htmlFor="avatarURL">
                  {pathToUserAvatar ? (
                    <UserImgWrapper>
                      <Avatar src={pathToUserAvatar} alt="user-avatar" />
                    </UserImgWrapper>
                  ) : (
                    <UserImgWrapper>
                      <UserIcon width="40" height="40">
                        <use href={`${sprite}#icon-user-default`}></use>
                      </UserIcon>
                    </UserImgWrapper>
                  )}

                  <PlusIcon width="24px" height="24px">
                    <use href={`${sprite}#icon-plus-avatar`}></use>
                  </PlusIcon>
                </AvatarLabel>

                <input
                  type="file"
                  id="avatarURL"
                  name="avatarURL"
                  onBlur={() => {
                    props.setTouched({ avatarURL: true });
                  }}
                  onChange={event => {
                    if (event.target.files[0]) {
                      if (
                        SUPPORTED_FORMATS.includes(event.target.files[0].type)
                      ) {
                        setPathToUserAvatar(
                          window.URL.createObjectURL(event.target.files[0])
                        );
                        props.setFieldValue('avatarURL', event.target.files[0]);
                      }
                    } else {
                      setPathToUserAvatar(user.avatarURL);
                    }
                  }}
                />
              </UserAvatarWrapper>

              {props.errors.avatarURL && (
                <ErrorMessage location="file">
                  {props.errors.avatarURL}
                </ErrorMessage>
              )}

              <InputButtonWrapper>
                <NameLabel htmlFor="name" id="labelName">
                  <NameInput
                    type="text"
                    name="name"
                    id="name"
                    value={props.values.name}
                    onBlur={() => {
                      props.setTouched({
                        name: true,
                      });
                    }}
                    onChange={event => {
                      props.setTouched({
                        name: true,
                      });
                      props.setFieldValue('name', event.target.value);
                    }}
                  />
                  <UserIconStyled width="18" height="18">
                    <use href={`${sprite}#icon-user`}></use>
                  </UserIconStyled>
                  <EditIcon width="17" height="17">
                    <use href={`${sprite}#icon-edit`}></use>
                  </EditIcon>
                </NameLabel>

                {props.errors.name ? (
                  <ErrorMessage>{props.errors.name}</ErrorMessage>
                ) : null}

                <SubmitBtn
                  type="submit"
                  disabled={
                    !(
                      (props.touched.name &&
                        props.values.name &&
                        !props.errors.name) ||
                      (props.touched.avatarURL &&
                        props.values.avatarURL &&
                        !props.errors.avatarURL)
                    )
                  }
                >
                  Save changes
                </SubmitBtn>
              </InputButtonWrapper>
            </FormStyled>
          )}
        </Formik>
      </ModalContent>
    );
}
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form';
import { Textarea } from './../../common/FormsControl/FormsControl';
import { maxLengthCreator, required } from './../../utils/validators';
import s from './AddMessageForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const maxLength4096 = maxLengthCreator(4096)

const AddMessageForm = (props) => {
    return (
        <form className={s.addmessageForm} onSubmit={props.handleSubmit}>
            <Field name='newMessageBody' component={Textarea}
                validate={[required, maxLength4096]} className={s.textarea}
                rows="1" cols="110" placeholder='Write a message...'/>
            <button className={s.sendButton}>
                <FontAwesomeIcon icon={faPaperPlane} className={s.sendIcon} />
            </button>
        </form>
    )
}

const AddMessageReduxForm = reduxForm({ form: 'dialogsSendMessageForm' })(AddMessageForm)

export default AddMessageReduxForm
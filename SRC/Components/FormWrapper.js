import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { verticalScale } from 'react-native-size-matters';
const FormWrapper = ({ children }) => (
    <KeyboardAwareScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        enableOnAndroid={true}
        extraScrollHeight={verticalScale(50)}
        keyboardShouldPersistTaps="handled"
    >
        {children}
    </KeyboardAwareScrollView>
);
export default FormWrapper;
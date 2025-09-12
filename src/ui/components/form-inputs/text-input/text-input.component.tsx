import {FieldValues, get} from "react-hook-form";
import {TextInputProps} from "./text-input.types";
import TextBox from "@/ui/components/textbox/textbox.component";

const TextInput = <TFormValues extends FieldValues>({
                                                        name,
                                                        register,
                                                        rules,
                                                        errors,
                                                        variant,
                                                        ...rest
                                                    }: TextInputProps<TFormValues>) => {
    const error = get(errors, name);
    return (
        <div>
            <TextBox
                {...register(name, rules)}
                variant={!!error ? "error" : variant}
                {...rest}
            />
            {
                !!error && (
                    <p className="mt-2 text-sm text-error">
                        {error.message}
                    </p>
                )
            }
        </div>
    );
};

export default TextInput;
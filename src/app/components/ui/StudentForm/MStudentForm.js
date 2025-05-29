import { MUploadZipFileP } from "@/app/components/ui/UploadZipFileP/MUploadZipFileP";
import { useForm, FormProvider } from "react-hook-form";
import styles from'./MStudentForm.module.css'; // Import the CSS for styling

export function MStudentForm({ onSubmit }) {
    const methods = useForm(); // get form methods like register, setValue, etc.

    const handleSubmit  = (data) => {
        console.log("Uploaded Files:", data.picture);
        onSubmit?.(data);
    };

    return (
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(handleSubmit)}>
                    <MUploadZipFileP /> {/* Can now use useFormContext inside */}
                    <button className={styles["button-one"]}>
                        Insert
                    </button>
                </form>
            </FormProvider>
        </>
    );
};

import { useState } from "react";

function InputExample() {
    const [form, setForm] = useState({ name: "", surname: "" });

    const onChangeInput = (event) => {
        setForm({ ...form, [event.target.name]: event.target.value });
    };

    return (
        <div>
            Please Enter Your Name <br />
            <input name="name" value={form.name} onChange={onChangeInput} />

            <br />
            Please Enter Your Surname <br />
            <input name="surname" value={form.surname} onChange={onChangeInput} />

            <br />
            <br />
            {form.name} {form.surname}
        </div>
    )
}

export default InputExample;
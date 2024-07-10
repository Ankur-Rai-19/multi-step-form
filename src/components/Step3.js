// import React from "react";

// const Step3 = ({ formData }) => {
//     return (
//         <div>
//             <h2>Confirmation</h2>
//             <pre>{JSON.stringify(formData, null, 2)}</pre>
//         </div>
//     );
// };

// export default Step3;

import React from "react";

const Step3 = ({ formData }) => {
    return (
        <div>
            <h2>Confirmation</h2>
            <table style={{ width: "100%", borderCollapse: "collapse" }}>
                <tbody>
                    <tr>
                        <th
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            Field
                        </th>
                        <th
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            Value
                        </th>
                    </tr>
                    <tr>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            Name
                        </td>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            {formData.name}
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            Email
                        </td>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            {formData.email}
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            Phone
                        </td>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            {formData.phone}
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            Address Line 1
                        </td>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            {formData.address1}
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            Address Line 2
                        </td>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            {formData.address2}
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            City
                        </td>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            {formData.city}
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            State
                        </td>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            {formData.state}
                        </td>
                    </tr>
                    <tr>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            Zip Code
                        </td>
                        <td
                            style={{ border: "1px solid #ddd", padding: "8px" }}
                        >
                            {formData.zip}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Step3;

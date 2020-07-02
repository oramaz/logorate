import React from "react"
import "../../assets/styles/Select.css";
import { Form } from "react-bootstrap";

type Props = {
   defaultValue: string;
   style?: object;
}

export const CustomSelect: React.FC<Props> = (props) => {
   const { style, defaultValue } = props

   return (
      <Form.Control as="select"  defaultValue="Choose...">
         <option>{defaultValue}</option>
         <option>...</option>
      </Form.Control>
   )
}
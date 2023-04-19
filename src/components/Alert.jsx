import React from 'react'

export default function Alert(props) {
  return (
    <div>
   {  props.alert && <div class="alert alert-success" role="alert">
    {props.alert.message}
</div>}
    </div>
  )
}

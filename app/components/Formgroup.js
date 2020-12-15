import React from "react"
import Prefix from "./Prefix"
import Suffix from "./Suffix"

function Formgroup({label, suffixPlaceholder, prefixPlaceholder, prefix, suffix, generate}) {
  
  return (
    <div className="form-group">
        <label htmlFor="">{label}</label>
        <Prefix 
          prefixPlaceholder={prefixPlaceholder}
          prefix={prefix}
          // generate={generate}
        />
        <Suffix 
          suffixPlaceholder={suffixPlaceholder}
          suffix={suffix}
        />
          
    </div>
  )
}

export default Formgroup
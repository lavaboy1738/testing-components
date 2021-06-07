import React from "react";
import styled from "styled-components";
import {ExportStatus, Role} from "./data";

const RecDetailsStyles = styled.div`
    display: flex;
    .rec-icon{
        border: 1px solid red;
        margin-right: 1rem;
    }
`

type Prop = {
    gl: boolean,
    tx: boolean,
    receipt: boolean,
    exportMethod: ExportStatus,
    role: Role,
}

export const RecDetails = (props: Prop)=>{
    const {gl, tx, receipt, exportMethod, role} = props;
    return(
        <RecDetailsStyles>
            <div className="rec-icon">{
                gl? "G" : "F"
            }</div>
            <div className="rec-icon">{
                tx? "T" : "F"
            }</div>{
                role === Role.ADMIN?
                (<>
                <div className="rec-icon">{
                    receipt? "R" : "F"
                }</div>
                <div className="rec-icon">{
                    exportMethod
                }</div>
                </>
                )
                :
                null
            }
        </RecDetailsStyles>
    )
}
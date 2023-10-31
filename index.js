import { createRoot } from 'react-dom/client';
import './index.css';
import * as React from "react";
import { useEffect } from 'react';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from "@syncfusion/ej2-react-kanban";

import * as dataSource from './datasource.json';

/**
 * Kanban Default sample
 */

const Default = () => {
    let kanbaObj;
    let data = extend([], dataSource.kanbanData, null, true);
    let color;
    function setColor() {
        color = "#dadada";
        /*kanbaObj.element.style.backgroundColor = color;*/
        var elementList = kanbaObj.element.querySelectorAll(".e-kanban, .e-header-cells, .e-card-wrapper, .e-card-wrapper .e-card");
        for (var i = 0; i < elementList.length; i++) {
            elementList[i].style.backgroundColor = color;
        }
    }
    const OnActionComplete = () => {
        if (color != undefined) {
            setColor()
        }
    };
    return (<div className="kanban-control-section">
        
        <div style={{width:'100%'}}><button className="e-btn e-primary">spacer</button></div>
        <div style={{width:'100%'}}><button className="e-btn e-primary">spacer</button></div> <div style={{width:'100%'}}><button className="e-btn e-primary">spacer</button></div> <div style={{width:'100%'}}><button className="e-btn e-primary">spacer</button></div> <div style={{width:'100%'}}><button className="e-btn e-primary">spacer</button></div>
        
        <button className="e-btn e-primary" onClick={setColor}>Set Color</button>
        <div className="col-lg-12 control-section">
            <div className="control-wrapper">
                <KanbanComponent id="kanban" ref={(kanban) => { kanbaObj = kanban; }}
                    keyField="Status" actionComplete={OnActionComplete.bind(this)} dataSource={data} cardSettings={{
                        contentField: "Summary",
                        headerField: "Id",
                        tagsField: "Tags",
                        grabberField: "Color",
                        footerCssField: "ClassName",
                    }}>
                    <ColumnsDirective>
                        <ColumnDirective headerText="To Do" keyField="Open" />
                        <ColumnDirective headerText="In Progress" keyField="InProgress" />
                        <ColumnDirective headerText="Testing" keyField="Testing" />
                        <ColumnDirective headerText="Done" keyField="Close" />
                    </ColumnsDirective>
                </KanbanComponent>
            </div>
        </div>
    </div>);
};
export default Default;

const root = createRoot(document.getElementById('sample'));
root.render(<Default />);
import React, { createRef, useState, useRef, RefAttributes } from "react";
import { Row, Col, Card, Table, Typography, Input } from "antd";
import { ColumnProps } from "antd/lib/table";
import { DeleteOutlined } from "@ant-design/icons";
import _ from "lodash";
import "antd/dist/antd.less";
import { CustomButton } from "./components/CustomButton";
import Button, { ButtonProps } from "antd/lib/button";
import "../src/styles/index.less";

const { Title } = Typography;

interface TaskList {
  key: number;
  task: string;
  status: string;
  remove: React.ReactNode;
}

function App() {
  const [taskName, setTaskName] = useState<string>("");
  const [data, setData] = useState<TaskList[]>([]);
  // const statusBtn = React.useRef() as React.MutableRefObject<HTMLButtonElement>;
  const statusBtn = React.useRef<HTMLButtonElement>();
  console.log(
    "🚀 ~ file: App.tsx ~ line 23 ~ App ~ statusBtn",
    statusBtn.current
  );

  const columns: ColumnProps<TaskList>[] = [
    {
      title: "Task",
      dataIndex: "task",
    },
    {
      title: "Status",
      dataIndex: "status",
      render: (value, record, index) => (
        <CustomButton
          ref={createRef()}
          type="primary"
          onClick={() => {
            data[index].status = value === "To do" ? "Done" : "To do";
            setData(_.cloneDeep(data));
          }}
        >
          {value}
        </CustomButton>
      ),
    },
    {
      title: "",
      dataIndex: "remove",
      render: (value, record, index) => (
        <DeleteOutlined
          onClick={() => {
            data.splice(index, 1);
            setData(_.cloneDeep(data));
          }}
        />
      ),
    },
  ];

  function recordText(event: React.FormEvent<HTMLInputElement>) {
    setTaskName(event.currentTarget.value);
  }

  function addTask() {
    data.push({
      key: data.length + 1,
      task: taskName,
      status: "To do",
      remove: "",
    });
    setData(_.cloneDeep(data));
    setTaskName("");
  }

  return (
    <>
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 12, offset: 6 }}>
          <Title className={"text-center mt-16"}>To Do Application</Title>
          <Card bordered={true}>
            <Row gutter={[16, 16]}>
              <Col lg={{ span: 20 }} xs={{ span: 24 }}>
                <Input value={taskName} onChange={recordText} />
              </Col>
              <Col lg={{ span: 4 }} xs={{ span: 24 }}>
                <CustomButton
                  type="primary"
                  disabled={_.isEmpty(taskName)}
                  onClick={addTask}
                >
                  ADD TASK
                </CustomButton>
              </Col>
            </Row>
            <Table
              scroll={{ y: "50vh" }}
              pagination={false}
              columns={columns}
              dataSource={data}
            />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default App;

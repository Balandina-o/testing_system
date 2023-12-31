import React, { useContext, useEffect, useState } from "react";
import { Context } from "../index";
import TestCard from "../component/TestCard";
import { observer } from "mobx-react-lite";
import { Button } from "react-bootstrap";
import AddNewTestModal from "../component/AddNewTestModal";
import { getTests } from "../API/testAPI";
import { deleteTest } from "../API/testAPI";
import classes from "../component/css_component/TestListPage.module.css";

const TestListPage = observer(() => {
  const { tests } = useContext(Context);
  const { users } = useContext(Context);
  const [showCreateTestModal, setShowCreateTestModal] = useState();

  const removeTest = async (id_test) => {
    try {
      const response = await deleteTest(id_test);
      console.log("ответ на удаление ", response);
      tests.removeTest(id_test);
    } catch (error) {
      alert(error);
    }
  };

  const getTestList = async () => {
    const response = await getTests();
    tests.setTests(response.data);
  };

  useEffect(() => {
    getTestList();
  }, []);

  return (
    <div className={classes.cont}>
      <div className={classes.title}>
        Промежуточные тесты курса "Графический дизайнер"
      </div>
      <AddNewTestModal
        show={showCreateTestModal}
        onClose={() => setShowCreateTestModal(false)}
      >
        {" "}
      </AddNewTestModal>
      {tests.testList.map((test) => (
        <TestCard
          key={test.id}
          id={test.id}
          title={test.name}
          img={test.testImg}
          description={test.description}
          onDelete={removeTest}
        />
      ))}
      {users.isAdmin && (
        <Button
          variant="primary"
          style={{ width: "70px", height: "50px", fontSize: "30px" }}
          className=" position-fixed bottom-0 end-0 mb-5 me-5 pt-0"
          onClick={() => setShowCreateTestModal(true)}
        >
          +
        </Button>
      )}
    </div>
  );
});

export default TestListPage;

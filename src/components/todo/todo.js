import React, { useContext, useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
import { v4 as uuid } from 'uuid';

import './todo.scss'

import Header from '../header/Header.js';
import Form from '../form/Form.js';
import List from '../list/List.js';
import SettingsForm from '../settingsForm/settingsForm.js';
import Login from '../login/Login.js';
import Auth from '../auth/Auth.js';
import { SettingsContext } from '../context/Settings.js';
import { ThemeContext } from '../context/Theme.js';

const ToDo = () => {

  const settings = useContext(SettingsContext);
  const theme = useContext(ThemeContext);

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [startPage, setStartPage] = useState(0);
  const [endPage, setEndPage] = useState(settings.itemNumber);

  const { handleChange, handleSubmit } = useForm(addItem);


  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id == id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);

  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  function pagination() {
    let result = list.slice(startPage, endPage);
    return result;
  }

  function next() {
    setStartPage(startPage + settings.itemNumber);
    setEndPage(endPage + settings.itemNumber);
  }
  function previous() {
    setEndPage(endPage - settings.itemNumber);
    setStartPage(startPage - settings.itemNumber);
  }

  return (
    <div className={`App ${theme.mode}`}>
        <SettingsForm />
        <Login>

        <Auth capability="read">
          <p>Can you read??</p>
        </Auth>
        <Auth capability="delete">
          <p>Can you delete??</p>
        </Auth>

        <Header incomplete={incomplete} />


        <Form
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          />

        <List
          pagination={pagination}
          next={next}
          previous={previous}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
        />
      </Login>
    </div>
  );
};

export default ToDo;

import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import path from 'path';
const ReactMarkdown = require('react-markdown')

import css from './style.css';

function MarkdownEditor({ file, write }) {
  console.log(file, write);

  const [value, setValue] = useState('');

  useEffect(() => {
    (async () => {
      setValue(await file.text());
    })();
  }, [file]);

  const handletextChange = (e) => {
    console.log(`file changed`)
    setValue(e.target.value)
  }

  const updateText = (e) => {
    e.preventDefault();

    let new_file = new File([value],
      file.name,
      {
        type: 'text/markdown',
        lastModified: new Date(Date.now())
      }
    );

    write(new_file)

  }

  return (
    <>
    <form onSubmit={updateText}>
      <textarea rows="20" cols="60" name="value" value={value} onChange={handletextChange}></textarea>
      <button type="submit"> Save </button>
    </form>
    <div className={css.preview}>
      <div className={css.title}>{path.basename(file.name)}</div>
      <div className={css.content}><ReactMarkdown source={value} /></div>
    </div>
    </>
  );
}

MarkdownEditor.propTypes = {
  file: PropTypes.object,
  write: PropTypes.func
};

export default MarkdownEditor;

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import './index.css';

const Folder = () => (
    <i className="fa fa-folder" aria-hidden="true"></i>
);
const File = () => (
    <i className="fa fa-file-text-o" aria-hidden="true"></i>
);

function FileName({name}) {
    return (
      <span className="name">
        {name}
      </span>
    );
}

function FileMessage({latestCommit}) {
    const { message } = latestCommit;
    return (
      <span className="message">
        {message}
      </span>
    );
}

const Time = ({ time }) => {
    const timeString = moment(time).fromNow();
    return (
      <span className="time">{timeString}</span>
    );
}

const testFiles =[
{
    id: 1,
    name: 'src',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
    message: 'Initial commit'
    }
},
{
    id: 2,
    name: 'tests',
    type: 'folder',
    updated_at: "2016-07-11 21:24:00",
    latestCommit: {
    message: 'Initial commit'
    }
},
{
    id: 3,
    name: 'README',
    type: 'file',
    updated_at: "2016-07-18 21:24:00",
    latestCommit: {
    message: 'Added a readme'
    }
},
];

function FileList({testFiles}){
    return(
    <table>
        <tbody>
            {testFiles.map( (testFile) =>
                <tr key={testFile.id}>
                    <td>
                    {testFile.type==='folder' ? <Folder /> : <File /> }
                        <FileName name={testFile.name}/>
                    </td>
                    <td>
                        <FileMessage latestCommit={testFile.latestCommit}/>
                    </td>
                    <td className="times">
                        <Time time={testFile.updated_at}/>
                    </td>
                </tr>
            )}
        </tbody>
    </table>
    );
}
ReactDOM.render(<FileList testFiles={testFiles} />, document.getElementById('root'));


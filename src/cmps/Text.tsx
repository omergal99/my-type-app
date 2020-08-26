import React from 'react';

interface SomeObj {
  [key: string]: String;
}

interface Props {
  name?: String;
  num?: Number;
  obj?: SomeObj | undefined;
  words?: String[];
  arrOfObj?: SomeObj[];
  bool?: Boolean;
  func?: Function | undefined;
}

export default function Text({ name, num, obj, words, arrOfObj, bool, func }: Props) {
  return (
    <div className="Text">
      hiii
      <div>{name}</div>
      <div>{num}</div>
      {obj &&
        <div>{obj.omer}</div>
      }
      <div>{words}</div>
      {arrOfObj &&
        <div>{arrOfObj[0].aa}</div>
      }
      <div>{bool}</div>
      {func && <div>{func()}</div>}
    </div>
  );
}
import React from 'react'

const Content = () => {

    const namesChanger = () => {
    const names = ["mgmg", "hlahla", "ag ag"];
    const i = Math.floor(Math.random() * 3);

    return names[i]
  }


  return (
    <main>
        <p>
            {namesChanger()}
        </p>
    </main>
  )
}

export default Content
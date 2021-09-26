import React, {useState} from 'react';
import cn from 'classnames';
import { DEFAULT_TAB, TabItems } from '../../const';
import Specifications from '../specifications/specifications';
import Reviews from '../reviews/reviews';
import Contacts from '../contacts/contacts';

import styles from './tabs.module.scss';

function Tabs() {
  const tabs = Object.values(TabItems);

  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);

  const handleButtonClick = (tab) => {

    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.buttons}>
        {
          tabs.map((tab) => (
            <button
              className={cn(styles.button, activeTab === tab && styles.button_active)}
              key={tab}
              type="button"
              onClick={() => {
                handleButtonClick(tab);
              }}
            >
              {tab}
            </button>
          ))
        }
      </div>
      <div>
        {TabItems.SPECIFICATIONS === activeTab && <Specifications/>}
        {TabItems.REVIEWS === activeTab && <Reviews/>}
        {TabItems.CONTACTS === activeTab && <Contacts/>}
      </div>
    </div>
  );
}

export default Tabs;

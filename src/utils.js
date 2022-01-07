import ContentstackLivePreview from './sdk/entry'

let onEntryChange = ContentstackLivePreview.onEntryChange = (data) => {
  console.log('hello brady')
  /*
  Whenever you update an entry, the onEntryChange() method will be executed. 
  You can define any coding logic that helps fetch data inside this method.
  */
};

export default onEntryChange;

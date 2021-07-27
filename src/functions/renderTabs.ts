function renderTabs(count: number) {
  let tabs = '';
  for (let i = 0; i < count; i++) {
    tabs += `  `;
  }
  return tabs;
}

export default renderTabs;

import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);

export default new vuex.Store({
  state: {
    sideMenu: []
  },

  mutations: {
    setSideMenu(state, data) {
      state.sideMenu = data;
    }
  },

  actions: {
    fetchParams(ctx) {
			console.log('fetching');
      fetch("menu.json")
        .then((res) => res.json())
        .then((res) => {
          const elems = res.map((temp) => {
            temp.children = [];
            return temp;
          });
          const rootElements = elems.filter((a) => a.parentIndex === 0);
          const childElements = elems.filter((a) => a.parentIndex !== 0);
          const usedIds = [];
          let step = 0
          console.log(elems, rootElements, childElements);

          // while (usedIds.length !== childElements.length && step < 200) {
            step += 1;
            childElements.forEach((element) => {
              if(element.parentIndex === element.Index) return;
              const parentNode = findNodeFromArray(element.parentIndex, rootElements);
              console.log('parentnode and elem', parentNode, element);
              if (parentNode !== false) {
                if (parentNode.children === undefined) {
                  parentNode.children = [];
                }
                parentNode.children.push(element);
                usedIds.push(element.index);
              }
            });
          // }

					ctx.commit('setSideMenu', rootElements);
        });
    }
  },

  getters: {
    getSideMenu(state) {
      return state.sideMenu;
    }
  }
});

function findNodeFromArray(id, array) {
  for (let i = 0; i < array.length; i++) {
    const result = findNode(id, array[i]);
    if (result !== false) {
      return result;
    }
  }
  return false;
}

function findNode(id, currentNode) {
  let i, currentChild, result;

  console.log('id and cur nide', id, currentNode.index);

  if (id === currentNode.index) {
    return currentNode;
  } else {
    for (i = 0; i < currentNode.children.length; i += 1) {
      currentChild = currentNode.children[i];
      result = findNode(id, currentChild);
      if (result !== false) {
				console.log('result is', result);
        return result;
      }
    }
    return false;
  }
}

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useStockStore = defineStore('stock', () => {
  // data
  const stock_list = ref([
    {
      name: 'Kopi',
      qty: 5
    },
    {
      name: 'Susu',
      qty: 5
    },
    {
      name: 'Teh',
      qty: 5
    }
  ])

  // function list
  const addNewStock = (name, qty) => {
    stock_list.value.push({
      name: name,
      qty: qty
    })
  }

  const decreaseStock = (index) => {
    let stock = stock_list.value[index]
    if (stock.qty > 0) {
      stock.qty--
    }
  }
  const increaseStock = (index) => {
    let stock = stock_list.value[index]
    stock.qty++
  }

  return { stock_list, addNewStock, decreaseStock, increaseStock }
})

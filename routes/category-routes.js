const router = require('express').Router()
const { Category, Product } = require('../models')

// The `/api/categories` endpoint

router.get('/categories', async function (req, res) => {
  // find all categories
  // be sure to include its associated Products
  const categories = await Category.findAll({include: [Product]})
  res.json(categories)
})

router.get('/categories/:id', async function (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
})

router.post('/categories', async function (req, res) => {
  // create a new category
})

router.put('/categories/:id', async function (req, res) => {
  // update a category by its `id` value
})

router.delete('/categories/:id', async function (req, res) => {
  // delete a category by its `id` value
})

module.exports = router

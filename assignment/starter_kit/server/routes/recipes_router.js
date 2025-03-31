const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');


router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.json(recipes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.post('/', async (req, res) => {
    const recipe = new Recipe({
        name: req.body.name,
        description: req.body.description,
        difficulty: req.body.difficulty,
        ingredients: req.body.ingredients,
        steps: req.body.steps
    });

    try {
        const newRecipe = await recipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.get('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (recipe) {
            res.json(recipe);
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (recipe) {
            recipe.name = req.body.name || recipe.name;
            recipe.description = req.body.description || recipe.description;
            recipe.difficulty = req.body.difficulty || recipe.difficulty;
            recipe.ingredients = req.body.ingredients || recipe.ingredients;
            recipe.steps = req.body.steps || recipe.steps;

            const updatedRecipe = await recipe.save();
            res.json(updatedRecipe);
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const recipe = await Recipe.findById(req.params.id);
        if (recipe) {
            await recipe.deleteOne();
            res.json({ message: 'Recipe deleted' });
        } else {
            res.status(404).json({ message: 'Recipe not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router; 
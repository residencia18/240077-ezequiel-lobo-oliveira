using System;
using System.Collections.Generic;
using Xunit;

namespace Atividade09.Tests
{
    public class ItemCollectionTests
    {
        [Fact]
        public void AddItem_WithValidItem_AddsItemToCollection()
        {
            var collection = new ItemCollection();
            var item = new Item("TestItem");
            collection.AddItem(item);
            var items = collection.GetItems();
            Assert.Contains(item, items);
        }

        [Fact]
        public void AddItem_WithNullItem_ThrowsArgumentException()
        {
            var collection = new ItemCollection();
            var exception = Assert.Throws<ArgumentException>(() => collection.AddItem(null));
            Assert.Equal("Item cannot be null", exception.Message);
        }

        [Fact]
        public void RemoveItem_WithValidItem_RemovesItemFromCollection()
        {
            var collection = new ItemCollection();
            var item = new Item("TestItem");
            collection.AddItem(item);
            collection.RemoveItem(item);
            var items = collection.GetItems();
            Assert.DoesNotContain(item, items);
        }

        [Fact]
        public void RemoveItem_WithNonExistentItem_ThrowsArgumentException()
        {
            var collection = new ItemCollection();
            var item = new Item("TestItem");
            var exception = Assert.Throws<ArgumentException>(() => collection.RemoveItem(item));
            Assert.Equal("Item not found in the collection", exception.Message);
        }

        [Fact]
        public void GetItems_ReturnsAllAddedItems()
        {
            var collection = new ItemCollection();
            var item1 = new Item("Item1");
            var item2 = new Item("Item2");
            collection.AddItem(item1);
            collection.AddItem(item2);
            var items = collection.GetItems();
            Assert.Equal(2, items.Count);
            Assert.Contains(item1, items);
            Assert.Contains(item2, items);
        }
    }
}

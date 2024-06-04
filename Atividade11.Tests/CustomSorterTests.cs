using System;
using System.Collections.Generic;
using Xunit;

namespace Atividade11.Tests
{
    public class CustomSorterTests
    {
        [Fact]
        public void SortDescending_WithUnsortedList_ReturnsSortedDescending()
        {
            var sorter = new CustomSorter();
            var numbers = new List<int> { 3, 1, 2 };
            var result = sorter.SortDescending(numbers);
            Assert.Equal(new List<int> { 3, 2, 1 }, result);
        }

        [Fact]
        public void SortDescending_WithAlreadySortedList_ReturnsSameList()
        {
            var sorter = new CustomSorter();
            var numbers = new List<int> { 3, 2, 1 };
            var result = sorter.SortDescending(numbers);
            Assert.Equal(numbers, result);
        }

        [Fact]
        public void SortDescending_WithEmptyList_ReturnsEmptyList()
        {
            var sorter = new CustomSorter();
            var numbers = new List<int>();
            var result = sorter.SortDescending(numbers);
            Assert.Empty(result);
        }

        [Fact]
        public void SortDescending_WithSingleElementList_ReturnsSameList()
        {
            var sorter = new CustomSorter();
            var numbers = new List<int> { 1 };
            var result = sorter.SortDescending(numbers);
            Assert.Equal(numbers, result);
        }

        [Fact]
        public void SortDescending_WithDuplicateElements_ReturnsCorrectOrder()
        {
            var sorter = new CustomSorter();
            var numbers = new List<int> { 3, 1, 2, 3, 1 };
            var result = sorter.SortDescending(numbers);
            Assert.Equal(new List<int> { 3, 3, 2, 1, 1 }, result);
        }
    }
}

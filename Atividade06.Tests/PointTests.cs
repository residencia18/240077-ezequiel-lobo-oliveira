using System;
using Xunit;
using Atividade06;

namespace Atividade06.Tests
{
    public class PointTests
    {
        [Fact]
        public void DistanceTo_WithValidPoints_ReturnsCorrectDistance()
        {
            
            var point1 = new Point(0, 0);
            var point2 = new Point(3, 4);

            
            var distance = point1.DistanceTo(point2);

            
            Assert.Equal(5, distance, precision: 5);
        }

        [Fact]
        public void DistanceTo_WithSamePoint_ReturnsZero()
        {
            var point1 = new Point(1, 1);

            
            var distance = point1.DistanceTo(point1);

            
            Assert.Equal(0, distance, precision: 5);
        }

        [Fact]
        public void DistanceTo_WithNullPoint_ThrowsArgumentNullException()
        {

            var point1 = new Point(1, 1);

            
            Assert.Throws<ArgumentNullException>(() => point1.DistanceTo(null));
        }
    }
}

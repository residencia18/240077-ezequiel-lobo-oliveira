using System;
using Xunit;
using NSubstitute;

namespace Atividade07.Tests
{
    public class UserServiceTests
    {
        [Fact]
        public void SaveUser_WithValidUser_CallsSaveUserOnDatabase()
        {
            var mockDatabase = Substitute.For<IDatabase>();
            var userService = new UserService(mockDatabase);
            var user = new User("John Doe", "john.doe@example.com");

            userService.SaveUser(user);

            mockDatabase.Received(1).SaveUser(user);
        }

        [Fact]
        public void SaveUser_WithNullName_ThrowsArgumentException()
        {
            var mockDatabase = Substitute.For<IDatabase>();
            var userService = new UserService(mockDatabase);
            var user = new User(null, "john.doe@example.com");

            var exception = Assert.Throws<ArgumentException>(() => userService.SaveUser(user));
            Assert.Equal("User must have a name and email", exception.Message);
        }

        [Fact]
        public void SaveUser_WithNullEmail_ThrowsArgumentException()
        {
            var mockDatabase = Substitute.For<IDatabase>();
            var userService = new UserService(mockDatabase);
            var user = new User("John Doe", null);

           
            var exception = Assert.Throws<ArgumentException>(() => userService.SaveUser(user));
            Assert.Equal("User must have a name and email", exception.Message);
        }

        [Fact]
        public void SaveUser_WithEmptyName_ThrowsArgumentException()
        {
            var mockDatabase = Substitute.For<IDatabase>();
            var userService = new UserService(mockDatabase);
            var user = new User(string.Empty, "john.doe@example.com");

            var exception = Assert.Throws<ArgumentException>(() => userService.SaveUser(user));
            Assert.Equal("User must have a name and email", exception.Message);
        }

        [Fact]
        public void SaveUser_WithEmptyEmail_ThrowsArgumentException()
        {
            var mockDatabase = Substitute.For<IDatabase>();
            var userService = new UserService(mockDatabase);
            var user = new User("John Doe", string.Empty);

            var exception = Assert.Throws<ArgumentException>(() => userService.SaveUser(user));
            Assert.Equal("User must have a name and email", exception.Message);
        }
    }
}

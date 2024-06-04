using Xunit;
using NSubstitute;
using Amazon.Rekognition.Model;
using System.Collections.Generic;
using System.IO;
using System.Threading.Tasks;
using System.Globalization;

namespace Atividade15.Tests
{
    public class DetectTextImageTests
    {
        [Fact]
        public async Task DetectTextLabelAsync_SavesTextDetectionResultToFile()
        {
            var mockRekognitionClient = Substitute.For<IRekognitionClientWrapper>();
            var detectTextResponse = new DetectTextResponse
            {
                TextDetections = new List<TextDetection>
                {
                    new TextDetection { DetectedText = "Test", Confidence = 99.9f, Id = 1, ParentId = 0, Type = "LINE" }
                }
            };
            mockRekognitionClient.DetectTextAsync(Arg.Any<DetectTextRequest>()).Returns(Task.FromResult(detectTextResponse));

            var sourceImagePath = "dummyImagePath"; 
            var detectTextImage = new DetectTextImage(sourceImagePath, mockRekognitionClient);
            var resultFilePath = "result.txt";

            using (var imageStream = new MemoryStream(new byte[] { 1, 2, 3, 4 }))
            {
                File.WriteAllBytes(sourceImagePath, imageStream.ToArray());

                await detectTextImage.DetectTextLabelAsync(resultFilePath);

                Assert.True(File.Exists(resultFilePath));
                var fileContent = File.ReadAllText(resultFilePath);
                Assert.Contains("Detected: Test", fileContent);
                
                var expectedConfidence = 99.9.ToString(CultureInfo.InvariantCulture);
                var expectedConfidenceWithComma = 99.9.ToString(CultureInfo.GetCultureInfo("pt-BR")); 
                Assert.True(fileContent.Contains($"Confidence: {expectedConfidence}") || fileContent.Contains($"Confidence: {expectedConfidenceWithComma}"));
                
                Assert.Contains("Id: 1", fileContent);
                Assert.Contains("ParentId: 0", fileContent);
                Assert.Contains("Type: LINE", fileContent);

                File.Delete(sourceImagePath); 
            }
        }
    }
}

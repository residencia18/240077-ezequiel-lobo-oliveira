﻿using Cepedi.BancoCentral.Domain.Entities;
using Cepedi.BancoCentral.Domain.Repository;
using Cepedi.BancoCentral.Shareable.Requests;
using Cepedi.BancoCentral.Shareable.Responses;
using Microsoft.Extensions.Logging;
using MediatR;
using System;
using System.Threading;
using System.Threading.Tasks;

namespace Cepedi.Domain.Handlers
{
    public class CriarUsuarioRequestHandler : IRequestHandler<CriarUsuarioRequest, CriarUsuarioResponse>
    {
        private readonly ILogger<CriarUsuarioRequestHandler> _logger;
        private readonly IUsuarioRepository _usuarioRepository;

        public CriarUsuarioRequestHandler(IUsuarioRepository usuarioRepository, ILogger<CriarUsuarioRequestHandler> logger)
        {
            _usuarioRepository = usuarioRepository;
            _logger = logger;
        }

        public async Task<CriarUsuarioResponse> Handle(CriarUsuarioRequest request, CancellationToken cancellationToken)
        {
            try
            {
                var usuario = new UsuarioEntity()
                {
                    Nome = request.Nome,
                    DataNascimento = request.DataNascimento,
                    Celular = request.Celular,
                    CelularValidado = request.CelularValidado,
                    Email = request.Email,
                    Cpf = request.Cpf
                };

                await _usuarioRepository.CriarUsuarioAsync(usuario);

                return new CriarUsuarioResponse(usuario.Id, usuario.Nome);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Ocorreu um erro durante a execução.");
                throw;
            }
        }
    }
}

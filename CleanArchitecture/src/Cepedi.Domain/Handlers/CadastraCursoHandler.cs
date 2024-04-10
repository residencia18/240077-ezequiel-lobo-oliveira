using Cepedi.Domain.Entities;
using Cepedi.Domain.Repository;
﻿using Cepedi.Domain.Repository;
using Cepedi.Domain.Services;
using Cepedi.Shareable;
using Cepedi.Shareable.Requests;
using Cepedi.Shareable.Responses;
using MediatR;

namespace Cepedi.Domain.Handlers;

public class CadastraCursoHandler : ICadastraCursoHandler
public class CadastraCursoHandler : IRequestHandler<CadastraCursoRequest, CadastraCursoResponse>
{
    private readonly ICursoRepository _cursoRepository;

    public CadastraCursoHandler(ICursoRepository cursoRepository)
    {
        _cursoRepository = cursoRepository;
    }

    public async Task<CadastraCursoResponse> CadastraCursoAsync(CadastraCursoRequest curso)
    public async Task<CadastraCursoResponse> Handle(CadastraCursoRequest request, CancellationToken cancellationToken)
    {
        var _curso = await _cursoRepository.CadastraCursoAsync(curso);
        try {
            var _curso = await _cursoRepository.CadastraCursoAsync(request);

        return new CadastraCursoResponse(_curso.Id);
            return new CadastraCursoResponse(_curso.Id);
        } catch {
            throw new Exception("Erro");
        }
    }
}
# Aquecimento

## Quantas Entidades estão catalogadas?
546

## A que Tipologias pertence a Entidade "Autoridade para as Condições de Trabalho" (ent_ACT)?
Às Tipologias "Administração Pública" e "Autoridades de supervisção e fiscalização".
Requisição: http://clav-api.dglab.gov.pt/api/entidades/ent_ACT/tipologias?apikey=...
Resposta:
[
    {
        "sigla": "AP",
        "designacao": "Administração Pública",
        "id": "tip_AP"
    },
    {
        "sigla": "ASF",
        "designacao": "Autoridades de supervisão e fiscalização",
        "id": "tip_ASF"
    }
]

## Em que processos a entidade "Autoridade Nacional de Segurança Rodoviária" (ent_ANSR) participa como Iniciador?
Ao Processo "Registo nacional de condutores".
Requisição: http://clav-api.dglab.gov.pt/api/entidades/ent_ANSR/intervencao/participante?apikey=...
Resposta:
[
    {
        "tipoPar": "temParticipanteApreciador",
        "codigo": "450.10.214",
        "titulo": "Licenciamento ou comunicação de publicidade"
    },
    {
        "tipoPar": "temParticipanteIniciador",
        "codigo": "400.10.056",
        "titulo": "Registo nacional de condutores"
    }
]

## De que processos é dona a entidade "Colégio Militar" (ent_CMil)?
Do Processo "Realização de atividades de formação e treino animal".
Requisição: http://clav-api.dglab.gov.pt/api/entidades/ent_CMil/intervencao/dono?apikey=...
Resposta:
[
    {
        "codigo": "750.20.601",
        "titulo": "Realização de atividades de formação e treino animal"
    }
]
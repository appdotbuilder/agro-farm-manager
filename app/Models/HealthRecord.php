<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\HealthRecord
 *
 * @property int $id
 * @property int $animal_id
 * @property \Illuminate\Support\Carbon $record_date
 * @property string $type
 * @property string $treatment
 * @property string|null $symptoms
 * @property string|null $diagnosis
 * @property float $cost
 * @property \Illuminate\Support\Carbon|null $next_checkup
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @property-read \App\Models\Animal $animal
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord query()
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord whereAnimalId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord whereRecordDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord whereTreatment($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord whereSymptoms($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord whereDiagnosis($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord whereCost($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord whereNextCheckup($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|HealthRecord whereUpdatedAt($value)

 * 
 * @mixin \Eloquent
 */
class HealthRecord extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'animal_id',
        'record_date',
        'type',
        'treatment',
        'symptoms',
        'diagnosis',
        'cost',
        'next_checkup',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'record_date' => 'date',
        'next_checkup' => 'date',
        'cost' => 'decimal:2',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the animal that owns the health record.
     */
    public function animal(): BelongsTo
    {
        return $this->belongsTo(Animal::class);
    }
}